import numpy as np
import pandas as pd
import webbrowser
import urllib.request


input_movies = [1,2,5859,318,9315,7756,569,13345,3977,4896,1721,1722,8131,3409,3445,21345,19872]
movies = pd.read_csv('movies.csv')
movies.set_index('movieId',inplace=True)

for val in input_movies:
    try:
        print(str(val) + '    ' + str(movies.loc[val]['title'])) 
    except:
        pass

input_movie_Id = int(input('enter movie id : '))
print('Your entered movie is:')
print(movies.loc[input_movie_Id]['title'] + '     ' + movies.loc[input_movie_Id]['genres'])



my_df = pd.read_csv('merge_pivot.csv')
my_df.set_index('movieId',inplace = True)
my_input = my_df.loc[input_movie_Id]

# print(my_input)

computation = (((my_df - my_input)**2).sum(axis = 1)).sort_values(ascending = True)

# print(computation)

count = 0
# movies.set_index('movieId',inplace=True)

print('we recommend you:')
movieUrls = []
for val in computation.index:
    if count > 20:
        break
    try:
        print(movies.loc[val]['title'] + '     ' + movies.loc[val]['genres'] + '  ' + 'https://movielens.org/movies/'+str(val))
        movieUrls.append('https://sokt.io/divPrgK23UmjjxuxsVuk/personal-effds?Movie_id='+ str(val)+ '&Title = ' + movies.loc[val]['title'] + '&Generes=' + str(movies.loc[val]['genres']) + '&link = '+ 'https://movielens.org/movies/'+str(val))
        count += 1
    except:
        pass
        
for Urls in movieUrls:
    kittu = webbrowser.open(Urls)
    


print('lalala')





# def searchMovieId(enterMovie):
