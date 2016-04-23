import numpy as np
import matplotlib.pyplot as plt
import re

#process a txt file
def readFile(filename):
	arr = []
	# name = input("What is the name of the file you would like to read from?")
	inp = open(filename, "r")
	#read line into array
	for line in inp.readlines():

		#loop over the elements, split by commas
		#Note there will be an error if no commas
		for i in line.split(","):
			#convert to float and append to the list
			arr.append(float(i))

	# text = [word.strip(",.") for line in inp for word in line.split()]
	# print("testing")
	return arr

#There may be a better way but for now I'm using this
def readStringFile(filename):
	inp = open(filename, "r")
	text = inp.read()
	inp.close()
	#replaces everything not a letter
	text = re.sub('[^a-z\ ]+'," ", text)
	words = text.split()
	# print(words)
	return words

def main():
	#grabbing the data from text files
	gdp_cap = readFile("gdp_cap.txt")
	life_exp = readFile("life_exp.txt")
	pop = readFile("population.txt")

	#turning into numpy arrays
	np_gdp = np.array(gdp_cap)
	np_life = np.array(life_exp)
	np_pop = np.array(pop)
	#doubling the population
	np_pop*=2
	col =[]
	col = readStringFile("color.txt")

	#update: set s argument to np_pop
	#basic scatter plot, log scale
	# s seems to make bubbles based on size
	# c for colors, a for transparency
	plt.scatter(gdp_cap, life_exp, s = np_pop, c = col, alpha = 0.8)
	plt.xscale('log')

	#strings
	xlab = 'GDP per Capita [in USD]'
	ylab = "Life expectancy [in years]"
	title = 'World Development in 2007'

	#add axis labels
	plt.xlabel(xlab)
	plt.ylabel(ylab)

	#add title
	plt.title(title)

	#definitions of tick_val and tick_lab
	tick_val = [1000, 10000, 100000]
	tick_lab = ['1k', '10k', '100k']

	# additional customizations
	plt.text(1550, 71, 'India')
	plt.text(5700, 80, 'China')

	#additional information
	gdp_mean = np.mean(np_gdp)
	# lifegdp_corr = np.corrcoef(np_life, np_gdp)
	pop_median = np.median(np_pop)
	life_stddev = np.std(np_life)
	#testing footnote
	plt.figtext(0.2,0, 'gdp mean: '+str(gdp_mean) +'\n'
		+ 'life expectancy stddev: '+str(life_stddev) +'\n'
		+ 'population median: '+str(pop_median) +'\n')

	#Add grid() call
	plt.grid(True)

	#adapt the ticks on the x-axis
	plt.xticks(tick_val, tick_lab)

	plt.gcf().subplots_adjust(bottom = 0.2)
	plt.show()


if __name__ == '__main__':
	main()