from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework.permissions import AllowAny
from rest_framework import status


class EvaluateQuestion(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        id = request.data["id"]
        input = request.data["input"]
        if input.isdigit():
            if id == "check1":
                result = check1(w=int(input))
            elif id == "check2":
                result = check2(w=int(input))
            elif id == "check3":
                result = check3(w=int(input))
            elif id == "check4":
                result = check4(w=int(input))
            elif id == "check5":
                result = check5(w=int(input))
            elif id == "check6":
                result = check6(w=int(input))
            elif id == "check7":
                result = check7(w=int(input))
            elif id == "check8":
                result = check8(w=int(input))
            elif id == "check9":
                result = check9(w=int(input))
            elif id == "check10":
                result = check10(w=int(input))
        else:
            return Response({"msg": "Invalid Input"})
        return Response({"output": result}, status=status.HTTP_200_OK)


def check1(w):
    if w % 2 == 0 and w != 2:
        return "YES"
    else:
        return "NO"


def check2(w):
    if w % 2 == 0 and w != 2:
        return "YES"
    else:
        return "NO"


def check3(w):
    if w % 2 == 0 and w != 2:
        return "YES"
    else:
        return "NO"


def check4(w):
    if w % 2 == 0 and w != 2:
        return "YES"
    else:
        return "NO"


def check5(w):
    if w % 2 == 0 and w != 2:
        return "YES"
    else:
        return "NO"


def check6(w):
    if w % 2 == 0 and w != 2:
        return "YES"
    else:
        return "NO"


def check7(w):
    if w % 2 == 0 and w != 2:
        return "YES"
    else:
        return "NO"


def check8(w):
    if w % 2 == 0 and w != 2:
        return "YES"
    else:
        return "NO"


def check9(w):
    if w % 2 == 0 and w != 2:
        return "YES"
    else:
        return "NO"


def check10(w):
    if w % 2 == 0 and w != 2:
        return "YES"
    else:
        return "NO"
