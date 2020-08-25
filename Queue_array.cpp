#include<iostream>
using namespace std;
#define N 100
typedef int item;

struct Queue{
	int Front, Rear;
	item Data[N];
	int count;
};
Queue Q;

void Make_Q(Queue & Q){
	Q.Front=0;
	Q.Rear = -1;
	Q.count=0;
	
}
int Check_null(Queue Q){
	if(Q.count==0)
		return 1;
	return 0;
}

int Check_full(Queue Q){
	if(Q.count==N)
		return 1;
	return 0;
}

void Del_first(Queue & Q){
	if(Check_null(Q))
		cout<<"\nHang trong"<<endl;
	else{
		if(Q.count==1)
			Make_Q(Q);
		else{
			if(Q.Front==(N-1))
				Q.Front=0;
			else
				Q.Front++;
			
			Q.count--;
		}
	}
}

void Insert_last(Queue & Q, item x){
	if(Check_full(Q))
		cout<<"\nHang day"<<endl;
	else{
		if(Q.Rear==(N-1))
			Q.Rear=0;
		else
			Q.Rear++;
		Q.Data[Q.Rear]=x;
		Q.count++;
	}
}

void Import_Q(Queue & Q){
	item x=0; //Nhap x =-1 de ket thuc
	while(x!=-1){
	cout<<"\nNhap phan tu can them: "; cin>>x;
	if(x!=-1)
	Insert_last(Q,x);
	}
}
void Export_Q(Queue Q){
	for(int i=Q.Front; i<(Q.count+Q.Front);i++){
		cout<<"\t"<<Q.Data[i];
	}
}

void Del_k(Queue &Q, int k){
	if(k<1 || k>N)
		cout<<"\nVi tri xoa khong hop le";
	else{
		if(k==1)
			Del_first(Q);
		if(k==(Q.count+1)){
			Q.Rear--;
			Q.count--;
		}
		else{
			for(int i=(k-1); i<(Q.Front+Q.count);i++)
				Q.Data[i]=Q.Data[i+1];
			Q.Rear--;
			Q.count--;
		}
	}
}
main(){
	Make_Q(Q);
	Import_Q(Q);
	int k;
	cout<<"\nNhap vi tri can xoa: "; cin>>k;
	Del_k(Q, k);
	Export_Q(Q);
	cout<<"\nThe end";
	return 0;
}
