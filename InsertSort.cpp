// InsertSort Algorithms by duongdinh24
#include <iostream>
using namespace std;

// InsertSort function
void InsertSort(int a[],int n){
    int temp, j;
    for(int i=1;i<n;i++){
        j=i-1;
        temp=a[i];
        while(j>=0 && temp<a[j]){
            a[j+1]=a[j];
            j--;
        }
        a[j+1]=temp;
    }
}

// Input array and sort it, then print to screen
void Input(){
    int a[10];
    for(int i=0;i<10;i++)
        cin>>a[i];

    InsertSort(a,10);

    for (int i = 0; i < 10; i++)
        cout<<a[i]<<"\t";

}
int main(){
    Input();
    printf("\nDone!");
}

