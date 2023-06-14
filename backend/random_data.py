from names_dataset import NameDataset, NameWrapper

import random


def create_data():
    nd = NameDataset()

    male_names = nd.get_top_names(n=1000,gender='Male',country_alpha2='US')
    female_names = nd.get_top_names(n=1000,gender='Female',country_alpha2='US')


    male_name_list = male_names['US']['M']
    female_name_list = female_names['US']['F']

    names_list = male_name_list + female_name_list


    status_list = dict()
    stati = ['remote', 'in_person', 'collaborative']
    status_list['remote'] = ['home']
    status_list['in_person'] = ['K', 'L', 'P', 'M', 'North']
    status_list['collaborative'] = ['Starbucks', 'Panera', 'Gloria Jeans', 'BPL', 'NPL']
    # ['remote','in_person','collaborative']
    # in_person_list = ['K', 'L', 'P', 'M', 'North']
    # collaborative_list = ['Starbucks', 'Panera', 'Gloria Jeans', 'BPL', 'NPL']
    # hub_location_list = dict()
    # hub_location_list['Bloomington'] = 40000
    # hub_location_list['Atlanta'] = 30000
    # hub_location_list['Phoenix'] = 20000
    # hub_location_list['Dallas'] = 10000

    person_nodes = {}
    for i in range(1000):
        temp = {}
        temp['id'] = i
        temp['name']=names_list[i]
        num = random.randint(0,2)
        print(num)
        temp['loc'] = status_list[stati[num]][random.randint(0, len(status_list[stati[num]]) - 1)]
        temp['age'] = random.randint(15,50)
        person_nodes[i]= temp

    # print(status_list)

    # hub_node = {}
    # for idx, i in enumerate(hub_location_list):
    #     temp = {}
    #     temp['name'] = i
    #     temp['num_connected'] = random.randint(0,100)
    #     hub_node[idx] = temp

    # for idx,i in enumerate(status_list):
    #     temp = {} 
    #     temp['name']=i

    #     status_node[idx]=temp
    # return person_nodes,hub_node,status_node

    loc_node = {}
    i = 0
    for key in status_list.keys():
        # temp = {}
        # temp['status_name'] = key
        for x in status_list[key]:
            loc_node[i] = x
            i += 1

    print(loc_node)
# for key in person_nodes:
#     print(key, person_nodes[key])

# for key in event_node:
#     print(key, event_node[key])

# for key in hub_node:
#     print(key, hub_node[key])

create_data()