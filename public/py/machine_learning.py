import pandas as pd
import numpy as np
import sklearn
import pickle
import sys

models = {'model.m':{'scaler':pickle.load(open('escala_agrup.m','rb')),
               'cluster':pickle.load(open('agrupamento.m','rb'))}}

var = [int(sys.argv[1]), int(sys.argv[2]), int(sys.argv[3])]


p1 = np.array([0, 20, 50, 70, 30, 40, 90, 80, 10, 5])*var[0]

p2 = np.array([90, 7, 9, 55, 73, 42, 10, 0, 5, 1])*var[1]

p3 = np.array([30, 40, 70, 80, 22, 89, 1, 23, 7, 4.5])*var[2]

hab = (p1+p2+p3)/3

def gera_grupos(x, model):
    entrada = x
    scaled_data = model['model.m']['scaler'].transform([entrada])
    Output_Pred = model['model.m']['cluster'].predict(scaled_data)
    return Output_Pred;

features = ['Habilidade 1', 'Habilidade 2', 'Habilidade 3', 'Habilidade 4',
               'Habilidade 5', 'Habilidade 6', 'Habilidade 7', 'Habilidade 8', 'Habilidade 9',
               'Habilidade 10', 'Grupo']

cluster = gera_grupos(x = hab, model = models);

print(cluster[0])

sys.stdout.flush()