//
//Code by duongdinh24
// Stack pointer
#include<stdio.h>
#include<stdlib.h>

// Cai dat Stack bang con tro
typedef int item;
struct Node{   // Khai bao node du lieu
	item Data; // Du lieu
	Node *Next;  // con tro lien ket
};
typedef struct Stack{   // Dinh nghia kieu stack
	Node * Top;
}Stack;

// Ham khoi tao stack
void Newstack(Stack & S){ 
	S.Top=NULL;
}

// Ham kiem tra Stack rong
int Isnull(Stack & S){
	return (S.Top == NULL);
}

// Ham kiem tra do dai Stack
int Lenstack(Stack S){
	Node *P = S.Top; // Khai bao con tro P tro toi S
	int i = 0;
	while (P!=NULL){
		i++;
		P=P->Next;
	}
	return i;
}

// Ham Tao mot Node
Node *Make_Node(item x){
	Node *P = (Node*)malloc(sizeof(Node)); // CAp phat bo nho cho Node
	// Code C++:  Node *P = new Node;
	P->Data=x;
	P->Next= NULL;
	return P;
}

// Ham Push - Them vao dau danh sach
void Push(Stack & S, item x){
	Node * P = Make_Node(x); // Tao node P chua gia tri x
	P->Next = S.Top;
	S.Top = P;
}

// Ham Pop - Lay gia tri phan tu dau danh sach

item Pop(Stack & S){
	if(S.Top!=NULL){
		item x = S.Top->Data;
		S.Top=S.Top->Next;
		return x;
	}
}

// Ham chen gia tri x vao vi tri k bat ki
void Insert_k(Stack & S, item x, int k){
	if(k<1 || k > Lenstack(S))
		printf("\nVi tri chen khong hop le");
	else{
		Stack Temp;
		Newstack(Temp);
		
		int t = Lenstack(S)-k;
//		printf("\nDo dai la %d", Lenstack(S));
		
		while(t>=0){
			Push(Temp,Pop(S));
			t--;
		}
		
		Push(S,x);
		
		while(Temp.Top!=NULL){
			Push(S, Pop(Temp));
		}
			
	}
	
}
// Nhap nhap Input
void Input(Stack & S){
	printf("\nNhap phan tu cho stack: \nNhap 0 de ket thuc\n");
	item x;
	do{
		scanf("%d",&x);
		if(x!=0)
			Push(S,x);
	}
	while (x!=0);
}

// Ham xuat
void Output(Stack S){
	printf("\n");
	while(S.Top !=NULL)
		printf("  %d",Pop(S));
}

// Ham doi thap phan sang nhi phan
void Convertbinary(int x){
	Stack Binary;
	int temp;
	Newstack(Binary);
	while(x!=0){
		 Push(Binary,(x%2));
		 x=x/2;
	}
	printf("\nKet qua: ");
	while(Binary.Top!= NULL)
		printf("%d",Pop(Binary));
}
int main(){
	Stack S;
	Newstack(S);
	Input(S);
	Insert_k(S,14,4);
	printf("\nStack sau khi chen 14 : \n");
	Output(S);
	Convertbinary(218);
	return 0;
}

