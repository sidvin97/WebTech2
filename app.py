from flask import Flask, render_template
from flask import request
from flask import session
app = Flask(__name__)

@app.route("/")
def main():
	return render_template('index.html')

@app.route("/question_page", methods=['GET', 'POST'])
def question_page():
	if request.method == 'POST':
		rem = request.get_json()
		print(rem["dat"])
	return render_template('question-page.html')


@app.route("/get_quest", methods=['GET', 'POST'])
def get_quest():
	if request.method == 'POST':
		rem = request.get_json()
		print(rem["top"])
	ctr=int(rem["ctr"])
	if(ctr==0):
		return "What is the phenomenon that makes light to propagate through optical fibre?;Total Internal Reflection;Refraction;Reflection;1"
	elif(ctr==1):
		return "Who has won the most Men's singles grand slams in Tennis?;Rafael Nadal;Roger Federer;Novak Djokovic;2"
	elif(ctr==2):
		return "How many Premier League Titles has Manchester United Won?;5;11;13;3"
	else:
		return "OVER!"

if __name__ == "__main__":
	#app.config['TEMPLATES_AUTO_RELOAD'] = True
	app.run(debug=True,port = 5001)

