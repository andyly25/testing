from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt 
import numpy as np 

fig = plt.figure()
ax = fig.add_subplot(111,projection='3d')
for c, z in zip(['y','g','r', 'b'], [30,20,10,0]):
	xs = np.arange(20)
	ys = np.random.rand(20)

	#can provide either a single color or an array
	#the first bar of each set will be colored cyan
	cs =[c]*len(xs)
	cs[0]= 'c'
	ax.bar(xs,ys, zs=z, zdir = 'y', color=cs, alpha=0.8)

ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')

plt.show()

# for angle in range(0,360):
# 	ax.view_init(30,angle)
# 	plt.draw