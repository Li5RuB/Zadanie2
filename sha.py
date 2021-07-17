import hashlib
import os
cwd = os.getcwd()
files = os.listdir(cwd)
for file in files:
    m = hashlib.sha3_256()
    s = bytes(open(cwd+'\\'+file).read(),encoding='utf-8')
    m.update(s)
    m.digest()
    print(file+' '+m.hexdigest())
