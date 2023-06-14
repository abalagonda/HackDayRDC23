from names_dataset import NameDataset, NameWrapper

import random


nd = NameDataset()

male_names = nd.get_top_names(n=1000,gender='Male',country_alpha2='US')
female_names = nd.get_top_names(n=1000,gender='Female',country_alpha2='US')


male_name_list = male_names['US']['M']
female_name_list = female_names['US']['F']

names_list = male_name_list + female_name_list


person_nodes = {}

random_location_list = ['default','corp n','corp s']
hub_location_list = ['Bloomington', "Atlanta", "Phoenix", "Dallas"]



for i in range(1000):
    temp = {}
    temp['name']=names_list[i]
    temp['connected_to'] = random_location_list[random.randint(0,2)]
    temp['age'] = random.randint(15,50)
    person_nodes[i]= temp

hub_node = {}
for idx, i in enumerate(hub_location_list):
    temp = {}
    temp['name'] = i
    temp['num_connected'] = random.randint(0,100)
    hub_node[idx] = temp

event_node = {}
for idx,i in enumerate(random_location_list):
    temp = {}
    temp['name']=i
    temp['num_connected']=random.randint(0,100)
    event_node[idx]=temp



for key in person_nodes:
    print(key, person_nodes[key])

for key in event_node:
    print(key, event_node[key])

for key in hub_node:
    print(key, hub_node[key])