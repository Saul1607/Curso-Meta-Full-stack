from curses.ascii import isdigit
import findstring
import pytest #type: ignore

def test_ispresent():
    assert findstring.ispresent("Al")

def test_nodigit():
    assert findstring.nodigit("N7")
