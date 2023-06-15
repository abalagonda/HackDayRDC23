from names_dataset import NameDataset, NameWrapper

import random


def create_data():
    nd = NameDataset()

    male_names = nd.get_top_names(n=100,gender='Male',country_alpha2='US')
    female_names = nd.get_top_names(n=100,gender='Female',country_alpha2='US')


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
    for i in range(200):
        temp = {}
        temp['id'] = i
        temp['name']=names_list[i]
        num = random.randint(0,2)
        temp['loc'] = status_list[stati[num]][random.randint(0, len(status_list[stati[num]]) - 1)]
        temp['status']=stati[num]
        temp['age'] = random.randint(15,50)
        person_nodes[i]= temp

    # print(status_list)

    # hub_node = {}
    # for idx, i in enumerate(hub_location_list):
    #     temp = {}
    #     temp['name'] = i
    #     temp['num_connected'] = random.randint(0,100)
    #     hub_node[idx] = temp
    status_node = {}
    for idx,i in enumerate(stati):
        temp = {} 
        temp['name']=i

        status_node[idx]=temp
    # return person_nodes,hub_node,status_node

    loc_node = {}
    i = 0
    for key in status_list.keys():

        for x in status_list[key]:
            loc_node[i] = x

            i += 1


    
    ip_event_titles = [
        "Coffee Chat", "Outdoor walk", "Mediation session"
    ]
    collab_event_titles = [
        "Brainstorming Session", "AWS Workshop", "Lunch and Learn"
    ]
    remote_event_titles = ['Zoom Call', 'Valorant Session', 'Online Chess']



    event_nodes = {}
    # for idx,i in enumerate(event_titles):
    #     temp = {} 
    #     temp['event_name']=i

    #     event_nodes[idx]=temp
    idx = 0
    for i in ip_event_titles:
        temp = {}
        temp['event_name']=i
        temp['status']='in_person'
        temp['loc']=status_list['in_person'][random.randint(0,len(status_list['in_person'])-1)]
        event_nodes[idx] = temp
        idx+=1
    for  i in collab_event_titles:
        temp = {}
        temp['event_name']=i
        temp['status']='collaborative'
        temp['loc']=status_list['collaborative'][random.randint(0,len(status_list['collaborative'])-1)]
        event_nodes[idx] = temp
        idx+=1
    for i in remote_event_titles:
        temp = {}
        temp['event_name']=i
        temp['status']='remote'
        temp['loc']=status_list['remote'][0]
        event_nodes[idx] = temp
        idx+=1
    
    
    # for key in loc_node:
    #     print(key, loc_node[key])
    # for key in event_nodes:
    #     print(key, event_nodes[key])
    # for key in person_nodes:
    #     print(key, person_nodes[key])

    # for key in status_node:
    #     print(key, status_node[key])

    return person_nodes,loc_node,status_node,status_list, event_nodes


create_data()