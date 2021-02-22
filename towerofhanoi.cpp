#include<iostream>
#include <time.h>
using namespace std;

// bai toan thap ha noi
void Tower(int n , char a, char b, char c ){
    if(n==1){
        cout<<"\t"<<a<<"------>"<<c<<endl;
        return;
    }
    Tower(n-1,a,c,b);
    Tower(1,a,b,c);
    Tower(n-1,b,a,c);
    }
  
void solve(){
	char a='A', b='B', c='C';
    clock_t start, end;
    double time_used;
    int n;
    cout<<"Nhap n: ";
    cin>>n;
    start=clock();
    Tower(n,a,b,c);
    end = clock();
    time_used= (double)(end - start) / CLOCKS_PER_SEC;
    cout<<"\nThoi gian chay: "<<time_used;
}
int main(){
	solve(); 
}
