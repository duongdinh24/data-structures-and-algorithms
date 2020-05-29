#include<bits/stdc++.h>
using namespace std;
typedef int item;
typedef struct node{
	item Data;
	node *Next;
}node;
typedef node *List;
//Tao list rong
void Init(List & L){
	L=NULL;
}
//check null
int Isempy(List L){
	return (L==NULL);
}
//Do dai List
int Len(List L){
	node *P = L;
	int i=0;
	while (P!=NULL){
		i++;
		P=P->Next;
	}
	return i;
}
//Tao mot Node
node *Make_node(node *P, item x){
	P = new node;
	P->Data=x;
	P->Next= NULL;
	return P;
}
//Chen vao dau danh sach
void Insert_first(List &L, item x){
	node *P = Make_node(P,x);
	if(L == NULL)
		L=P;
	else{
		P->Next=L;
		L=P;
	}
}
//Chen vao vi tri cuoi cung
void Insert_Last(List & L, item x){
	node *P = L;
	node * temp = Make_node(temp,x);
	
	if(L==NULL)
		L=temp;
	else{
		while(P->Next!=NULL){
			P=P->Next;
		}
		P->Next=temp;
	}
}
//Chen vao vi tri K
void Insert_K(List & L, item x, int k){
	node *P, *Q=L;
	int i=1;
	if(k<1 || k > Len(L))
		cout<<"\nVi tri chen khong hop le"<<endl;
	else{
		if(k==1)
			Insert_first(L,x);
		else{
			P= Make_node(P,x);
			while (i!=k-1 && Q!=NULL){
				Q=Q->Next;
				i++;
			}
			P->Next=Q->Next;
			Q->Next=P;
		}
	}
}
//Tim kiem phan tu
int Search_x(List L, item x){
	node *P=L;
	int i=1;
	while(P!=NULL && P->Data!=x){
		i++;
		P=P->Next;
	}
	if(P!=NULL) //Neu danh sach khac rong tra ve i
		return i;
	else // Danh sach bang rong thi vi tri bang 0;
		return 0;
}
//Xoa dau danh sach
void Del_first(List &L){
	if(L==NULL)
		cout<<"\nKhong co gi de xoa!";
	else
	L=L->Next;
}
//Xoa vi tri bat ky
void Del_k(List &L, int k){
	node *P=L;
	int i=1;
	if(k < 1 || k>Len(L) )
		cout<<"\nVi tri xoa khong hop le"<<endl;
	else if(k==1)
		Del_first(L);
	else{
		while (i!=k-1 && P!=NULL){
			P=P->Next;
			i++;
		}
		P->Next=P->Next->Next;
	}	
}
//Nhap ds;
void Input(List &L){
	Init(L);
	item x;
	int i=1;
	do{
	cout<<"\nNhap phan tu thu "<<i<<": ";
	cin>>x;
	if (x!=0){
		Insert_Last(L,x);
		i++;
		}
	}
	while (x!=0);	//Neu nhap x = 0 thi dung nhap
					//Ban co the dung cach khac
}
void Output(List L){
	node *P= L;
	cout<<"\n";
	while (P!=NULL){
		cout<<" "<<P->Data;
		P=P->Next;
	}
}
int main(){
	List L;
	Input(L);
	cout<<"\nDanh Sach: ";
	Output(L);
	item x = 100;
	cout<<"\nThem 100 vao vi tri 3: ";
	Insert_K(L,x,3);
	Output(L);
//	cout<<"\nVi tri x: "<<Search_x(L,x);
	cout<<"\nXoa phan tu 100
	 khoi danh sach: ";
	Del_k(L,Search_x(L,x)); //tim vi tri cua x sau do xoa tai vi tri nay
	Output(L);
	cout<<"\n Cam on ban da xem bai viet cua minh";
}
