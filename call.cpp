# Call by Value

int a = 20;

void func(int n){
    return n;
}


# Call by reference

int a = 20;

void func(int& n){
    return n;
}

# 입력을 넣는 칸에 
# 값을 넣으면 Call by valuse
# 주소를 넣으면 Call by reference -> 해당 변수의 메모리 주소 참조, 변수를 직접 처리하는 결과
