class Counter:
    def __init__(self, num: int):
        self.num = num
        self.serv = "g"
        self.status = True

    def toggle_serv(self):
        if self.serv == "g":
            self.serv = "r"
        else:
            self.serv = "g"

    def toggle_status(self):
        if self.status:
            self.status = False
        else:
            self.status = True

    def set_num(self, num):
        self.num = num

    




