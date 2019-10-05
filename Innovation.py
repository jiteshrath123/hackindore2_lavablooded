import numpy as np
import pandas as pd
import webbrowser
import time


# from firebase import firebase
# firebase = firebase.FirebaseApplication('https://hackindore-7768e.firebaseio.com', None)
# result = firebase.get('/users', None)
# print(result[0])


import urllib.request, json

is_new_data = -32

while True:
    url = "https://hackindore-7768e.firebaseio.com/.json"

    response = urllib.request.urlopen(url)

    data = json.loads(response.read())
    input_movie_Id = int(data['user'])

    if is_new_data == input_movie_Id:
        continue

    is_new_data = input_movie_Id 

    input_movies = [1,2,5859,318,9315,7756,569,13345,3977,4896,1721,1722,8131,3409,3445,21345,19872]
    movies = pd.read_csv('movies.csv')
    movies.set_index('movieId',inplace=True)

    for val in input_movies:
        try:
            print(str(val) + '    ' + str(movies.loc[val]['title'])) 
        except:
            pass

    # input_movie_Id = int(input('enter movie id : '))
    print('Your entered movie is:')
    print(movies.loc[input_movie_Id]['title'] + '     ' + movies.loc[input_movie_Id]['genres'])



    my_df = pd.read_csv('merge_pivot.csv')
    my_df.set_index('movieId',inplace = True)
    my_input = my_df.loc[input_movie_Id]

    # print(my_input)

    computation = (((my_df - my_input)**2).sum(axis = 1)).sort_values(ascending = True)

    computation = computation[:20]

    ratings = pd.read_csv('ratings.csv')
    ratings = ratings.groupby('movieId').mean()
    ratings.drop('userId',axis = 1,inplace = True)
    # ratings.head()

    comp_df = computation.to_frame()
    final_merge = pd.merge(ratings,comp_df,on = 'movieId')
    final_merge.sort_values(['rating'], ascending=False,inplace = True)


    print('we recommend you:')
    movieUrls = []
    for val in final_merge.index:
        try:
            print(movies.loc[val]['title'] + '     ' + movies.loc[val]['genres'] + '   ' + str(ratings.loc[val]['rating'].round(2)) + '  ' + 'https://movielens.org/movies/'+str(val))
            movieUrls.append('https://sokt.io/divPrgK23UmjjxuxsVuk/personal-effds?Movie_id='+ str(val)+ '&Title = ' + movies.loc[val]['title'] + '&rating = ' + str(ratings.loc[val]['rating'].round(2)) + '&Generes=' + str(movies.loc[val]['genres']) + '&link = '+ 'https://movielens.org/movies/'+str(val))
        except:
            pass
    for Urls in movieUrls:
        webbrowser.open(Urls)


# print('lalala')





# def searchMovieId(enterMovie):
