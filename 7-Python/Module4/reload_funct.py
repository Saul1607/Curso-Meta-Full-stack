from importlib import reload
import sample
import filechanges

reload(sample)
reload(sample)
reload(sample)

def changes():
    try:
        reload(filechanges)
        filechanges.print_changes()
    except:
        pass

for i in range(5):
    changes()
    input("Hit enter to reload...")