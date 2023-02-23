from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework.permissions import AllowAny
from rest_framework import status


class EvaluateQuestion(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        id = request.data["id"]
        input = request.data["input"]
        if id == "check1":
            result = check1(w=input)
        elif id == "check2":
            result = check2(w=input)
        elif id == "check3":
            result = check3(w=input)
        elif id == "check4":
            result = check4(w=input)
        elif id == "check5":
            result = check5(w=input)
        elif id == "check6":
            result = check6(w=input)
        elif id == "check7":
            result = check7(w=input)
        elif id == "check8":
            result = check8(w=input)
        elif id == "check9":
            result = check9(w=input)
        elif id == "check10":
            result = check10(w=input)
        return Response({"output": result}, status=status.HTTP_200_OK)


def check1(w):
    from math import factorial

    result = ""
    try:
        n = list(map(int, w.strip().split(",")))
        if n[0] < 1 or n[0] > 10:
            return "Invalid input"

        if len(n) != (n[0] + 1):
            return "Number of values entered are not equal to the number of test cases"

        for i in range(1, len(n)):
            if n[i] < 0 or n[i] > 20:
                return "Invalid input"
            result += f"{factorial(n[i])} "
    except:
        return "Invalid input"

    return result.rstrip()


def check2(w):
    result = ""
    try:
        n = list(map(int, w.strip().split(",")))
        if n[0] < 1 or n[0] > 100:
            return "Invalid input"

        if len(n) != (n[0] + 1):
            return "Number of values entered are not equal to the number of test cases"

        for i in range(1, len(n)):
            if n[i] < 0 or n[i] > 1000000:
                return "Invalid input"
            result += f"{n[i] // 2} "
    except:
        return "Invalid input"

    return result.rstrip()


def check3(w):
    result = ""
    try:
        n = list(w.strip().split(","))
        t = int(n[0].strip())
        if t < 1 or t > 100:
            return "Invalid input"

        if len(n) != (n[0] + 1):
            return "Number of values entered are not equal to the number of test cases"

        for i in range(1, len(n)):
            a, b = map(int, n[i].strip().split())
            if a < 1 or a > 9 or b < 1 or b > 9:
                return "Invalid input"
            result += f"{a**b} "
    except:
        return "Invalid input"

    return result.rstrip()


def check4(w):
    result = ""
    try:
        n = list(w.strip().split(","))
        t = int(n[0].strip())
        if t < 1 or t > 100:
            return "Invalid input"

        if len(n) != (n[0] + 1):
            return "Number of values entered are not equal to the number of test cases"

        for i in range(1, len(n)):
            a, b, c = map(int, n[i].strip().split())
            if a < -1000 or a > 1000 or b < -1000 or b > 1000 or c < -1000 or c > 1000:
                return "Invalid input"
            arr = [a, b, c]
            arr.sort()
            result += f"{arr[1]} "
    except:
        return "Invalid input"

    return result.rstrip()


def check5(w):
    from math import comb

    result = ""
    try:
        n = list(w.strip().split(","))
        t = int(n[0].strip())
        if t < 1 or t > 100:
            return "Invalid input"

        if len(n) != (n[0] + 1):
            return "Number of values entered are not equal to the number of test cases"

        for i in range(1, len(n)):
            a, b = map(int, n[i].strip().split())
            if a < 0 or a > 30 or b < 0 or b > 30 or b > a:
                return "Invalid input"
            result += f"{comb(a, b)} "
    except:
        return "Invalid input"

    return result.rstrip()


def check6(w):
    result = ""
    try:
        n = w.strip().split(",")
        t = int(n[0].strip())
        if t < 1 or t > 100:
            return "Invalid input"

        if len(n) != (n[0] + 1):
            return "Number of values entered are not equal to the number of test cases"

        for i in range(1, len(n)):
            s = n[i].strip()
            if len(s) < 1 or len(s) > 100:
                return "Invalid input"
            x = list()
            for i in s:
                x.append(i)
            for i in x:
                if (i >= "a" and i <= "z") or (i >= "A" and i <= "Z"):
                    continue
                return "Invalid input"
            result += f"{len(set(x))} "
    except:
        return "Invalid input"

    return result.rstrip()


def check7(w):
    from math import sqrt, floor

    result = ""
    try:
        n = list(map(int, w.strip().split(",")))
        if n[0] < 1 or n[0] > 100:
            return "Invalid input"

        if len(n) != (n[0] + 1):
            return "Number of values entered are not equal to the number of test cases"

        def prime(n):
            if n <= 1:
                return False
            if n == 2:
                return True
            for i in range(2, floor(sqrt(n)) + 1):
                if n % i == 0:
                    return False
            return True

        for i in range(1, len(n)):
            if n[i] < 0 or n[i] > 1000:
                return "Invalid input"
            for i in range(n[i], 1200):
                if prime(i):
                    result += f"{i} "
                    break
    except:
        return "Invalid input"

    return result.rstrip()


def check8(w):
    result = ""
    try:
        n = list(w.strip().split(","))
        t = int(n[0].strip())
        if t < 1 or t > 100:
            return "Invalid input"

        if len(n) != (n[0] + 1):
            return "Number of values entered are not equal to the number of test cases"

        for i in range(1, len(n)):
            a, b = map(int, n[i].strip().split())
            if a < 1 or a > 100 or b < 1 or b > 50:
                return "Invalid input"
            inc = True
            curr = 1
            if b == 1:
                for i in range(a):
                    print(1, end=" ")
                    result += "1 "
                print()
                continue
            for i in range(a):
                print(curr, end=" ")
                result += f"{curr} "
                curr += 1 if inc else -1
                if curr == b:
                    inc = False
                if curr == 1:
                    inc = True
            result += ", "
    except:
        return "Invalid input"

    return result.rstrip()


def check9(w):
    result = ""
    try:
        n = list(map(int, w.strip().split(",")))
        if n[0] < 1 or n[0] > 100:
            return "Invalid input"

        if len(n) != (n[0] + 1):
            return "Number of values entered are not equal to the number of test cases"

        for x in range(1, len(n)):
            if n[x] < 0 or n[x] > 100:
                return "Invalid input"
            for i in range(1, n[x] + 1):
                spc = n[x] - i
                for j in range(spc):
                    print(" ", end="")
                    result += " "
                print("/", end="")
                result += "/"
                cnt = (i - 1) * 2
                for j in range(1, cnt + 1):
                    print("*", end="")
                    result += "*"
                print("\\")
                result += "\ \n"
    except:
        return "Invalid input"

    return result.rstrip()


def check10(w):
    result = ""
    try:
        n = w.strip().split(",")
        t = int(n[0].strip())
        if t < 1 or t > 100:
            return "Invalid input"

        if len(n) != (n[0] + 1):
            return "Number of values entered are not equal to the number of test cases"

        for i in range(1, len(n)):
            s = n[i].strip()
            o = int(s)
            m = int(s[::-1])
            if o < 0 or o > 1_000_000_000:
                return "Invalid Input"
            result += f"{o * m} "
    except:
        return "Invalid input"

    return result.rstrip()
