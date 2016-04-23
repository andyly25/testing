import numpy as np 
import matplotlib.pyplot as plt 

fig = plt.figure()
ax = fig.add_subplot(111)

#The data
N = 5
menMeans = [18, 35, 30, 35, 22]
menStd = [2, 3, 4, 1, 2]
womenMeans = [25, 32,34,20, 24]
womenStd = [3,5,2,3,3]

#variable
ind = np.arange(N) #x loc for the groups
width = 0.30

#the bars
rects1 = ax.bar(ind, menMeans, width,
				color='purple',
				yerr=menStd,
				error_kw=dict(elinewidth=2,ecolor='green'))

rects2 = ax.bar(ind+width,womenMeans, width,
	color='green',
	yerr=womenStd,
	error_kw=dict(elinewidth=2,ecolor='purple'))

#axes and labels
ax.set_xlim(-width,len(ind)+width)
ax.set_ylim(0,45)
ax.set_ylabel('scores')
ax.set_title('scores by group and gender')
xTickMarks= ['Group'+str(i) for i in range(1,6)]
ax.set_xticks(ind+width)
xtickNames=ax.set_xticklabels(xTickMarks)
plt.setp(xtickNames,rotation = 45, fontsize=10)

#add a legend
ax.legend((rects1[0],rects2[0]), ('Men', 'Women'))

plt.show()
