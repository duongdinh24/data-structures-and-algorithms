#include<iostream>
using namespace std;
#define N 100
typedef int item;
typedef struct{
	item a[N];
	int count;
}List;
List L;

void Init_L(List *L){
	(*L).count=0;
}

int empty(List L){
	return (L.count==0);
}
int full(List L){
	return (L.count == N);
}
void Input(List *L){
	cout<<"Nhap so luong: ";
	cin>>(*L).count;
	for(int i=0;i<(*L).count;i++){
		printf("a[%d]= ",i); cin>>(*L).a[i];
	}
}

void Output(List L){
	for(int i=0;i<L.count;i++)
		cout<<L.a[i]<<"\t";
}

int Insert(List *L, item x, int k){
	if(full(*L)){
		cout<<"Danh sach day"<<endl;
		return 0;
	}
	if(k>(*L).count || k<1){
		cout<<"Vi tri chen khong hop le!"<<endl;
		return 0;
	}
	
	for(int i=(*L).count; i>=k;i++)
		(*L).a[i]=(*L).a[i-1];
	(*L).a[k-1]=x;
	(*L).count++;
	return 1;
}

int Del_K(List *L,int k){
	if(k<1 || k > count){
		cout<<"\nvi tri chen khong hop le"<<end;
		return 0;
	}
	if(empty(*L)){
		cout<<"Danh sach rong"
		return 0;
	}
	for(int i=k-1 ;i<(*L).count-1;i++){
		(*L).a[i]=(*L).a[i+1];
	}
	(*L).count--;
	return 1;
}

int main(){
	
}
