import test_pytest
import pytest # type: ignore

def test_add():
    assert test_pytest.add(4, 5) == 9

def test_sub():
    assert test_pytest.sub(4, 5) == -1