import pandas as pd, json, hashlib
import shutil, os, glob
import unicodedata

DATA_FOLDER = './data/'
DATA_FILE_NAME = "./data/dados.xlsx"
SEED_DATA_FILE_NAME = '../server/data/seedData.json'
SERVER_STORAGE_FOLDER = '../server/storage/'
CLIENT_CATEGORY_MAP_FILE = '../client/src/Data/CategoryMap.js'
PARAMS = {
    'category' : 'Categoria',
    'name' : 'nome',
    'description' : 'descrição',
    'image_file' : 'ficheiro_imagem'
}

def remove_accents(input_str):
    nfkd_form = unicodedata.normalize('NFKD', input_str)
    return u"".join([c for c in nfkd_form if not unicodedata.combining(c)])


def clean_server_storage():
    files = glob.glob(SERVER_STORAGE_FOLDER + '*')
    for f in files:
        os.remove(f)

def generate_seed():
    seed_data = dict()
    category_map = dict()

    df = pd.read_excel(DATA_FILE_NAME)
    for index, row in df.iterrows():
        category = row[PARAMS['category']]
        
        if(category not in category_map):
            normalized_category = remove_accents(category.lower().replace(' ', '_'))
            category_map[category] = normalized_category

        if(category_map[category] not in seed_data):
            seed_data[category_map[category]] = []

        name = row[PARAMS['name']]
        description = row[PARAMS['description']]
        data_img_filename = os.path.splitext(row[PARAMS['image_file']])
        fixed_img_filename = (''.join(data_img_filename)) if (data_img_filename[1] != '.tif') else (data_img_filename[0] + '.png')
        old_img_file = DATA_FOLDER + category + '/' + fixed_img_filename
        new_img_filename = hashlib.sha256((name+old_img_file).encode('utf-8')).hexdigest()

        shutil.copyfile(old_img_file, SERVER_STORAGE_FOLDER + new_img_filename)

        item = {
            'name' : name,
            'description' : description,
            'imageHash' : new_img_filename
        }
        seed_data[category_map[category]].append(item)

    with open(SEED_DATA_FILE_NAME, 'w', encoding='utf8') as seed_file:
        # ensure ascii set to false will force the file object to encode the whole file to UTF-8 correctly
        json.dump(seed_data, seed_file, indent=4, ensure_ascii=False)
    
    with open(CLIENT_CATEGORY_MAP_FILE, 'w', encoding='utf8') as category_map_file:
        # ensure ascii set to false will force the file object to encode the whole file to UTF-8 correctly
        json_str = json.dumps(category_map, indent=4, ensure_ascii=False)
        final_str = 'export const categoryMap = ' + json_str
        category_map_file.write(final_str)

def main():
    clean_server_storage()
    generate_seed()

if __name__ == '__main__':
    main()