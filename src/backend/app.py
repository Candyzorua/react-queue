from flask import Flask, request, jsonify
from flask_cors import CORS 

import counter

app = Flask(__name__)
CORS(app)

next_cust = 1
curr_cust = 0
prev_cust = 0

waitingList = []
counters = []

def initialize_counters():
    c1 = counter(0)
    c2 = counter(0)
    c3 = counter(0)
    c4 = counter(0)
    counters.append(c1)
    counters.append(c2)
    counters.append(c3)
    counters.append(c4)

def new_cust(): 
    waitingList.append(num_cust)
    num_cust += 1

def comp_curr(c: counter):
    c.set_num(0)
    c.toggle_serv()

def call_next(c: counter):
    if len(waitingList) > 0:
        c.set_num(waitingList.pop(0))
        c.toggle_serv()

@app.route('/manager')
def setup():
    pass

@app.route('/customer')
def setup():
    pass


