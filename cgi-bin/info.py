#!  /usr/bin/python3


print("content-type:text/html")
print()

import cgi
import subprocess
mydata  = cgi.FieldStorage()

info  = mydata.getvalue("info")


cmd = subprocess.getoutput("sudo "+ info +"\n")


print(cmd)


