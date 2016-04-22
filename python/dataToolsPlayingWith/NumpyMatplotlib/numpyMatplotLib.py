#tutorial from http://cs231n.github.io/python-numpy-tutorial/#matplotlib

import numpy as np 
import matplotlib.pyplot as plt 

#compute the x and y coordinates for points on sine and cosine curves
x = np.arange(0, 3*np.pi, 0.1)
y_sin = np.sin(x)
y_cos = np.cos(x)

#set up subplot grid has height 2 and width 1
#set first such subplot as active
plt.subplot(2,1,1)

#make the first plot
plt.plot(x, y_sin)
plt.title('Sine')

#Set the second subplot as active, and make the second plot
plt.subplot(2,1,2)
plt.plot(x, y_cos)
plt.title('Cosine')

#show the figure
plt.show()