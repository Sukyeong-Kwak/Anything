# Value & Pointer

int a = 1 # 값 변수 선언
int* b = &a # 주소 변수 선언
# a: 값 변수  / &a: 주소변수(=b)
# b: 주소변수 / *b: 값변수(=a)


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


# Swap에서 헷갈리는 것

void swap1(int& a, int& b){ # Call by reference
    int temp = a;
    b = a;
    a = temp
}

void swap2(int* a, int* b){ # Call by value(pointer value)
    int temp = *a;
    *a = *b;
    *b = temp
}

# 둘 다 같은 기능을 함
# swap1: 입력값에 주소값을 넣는게 아니라 변수를 넣으면 알아서 주소값으로 변환해줌
# swap2: 입력값으로 주소값을 넣고 함수 내에서도 주소값으로 연산함 
