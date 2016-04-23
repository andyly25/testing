import matplotlib.pyplot as plt 
import numpy as np

fig = plt.figure()
ax1 = fig.add_subplot(121)

#data
N=200
x=np.random.randn(N)
y=np.random.randn(N)

#leftpanel
ax1.scatter(x,y,color='purple', s=5,edgecolor='black')
ax1.set_aspect(1./ax1.get_data_ratio()) #make axes square

#right panel
ax2=fig.add_subplot(122)
props = dict(alpha=0.5, edgecolors='None')

handles =[]
colors=['cyan', 'red', 'green', 'yellow']
for color in colors:
	x= np.random.randn(N)
	y=np.random.randn(N)
	s = np.random.randint(50,300)
	handles.append(ax2.scatter(x,y, c= color, s=s,**props))

ax2.set_ylim([-5,11])
ax2.set_xlim([-5,11])

ax2.legend(handles,colors)
ax2.grid(True)
ax2.set_aspect(1./ax2.get_data_ratio())
plt.show()

