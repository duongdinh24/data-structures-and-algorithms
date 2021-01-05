#include<iostream>
using namespace std;
void swap(int &a, int &b){
	a=a+b;
	b=a-b;
	a=a-b;
}

int partition(int arr[], int low, int high){
	
	int privot = arr[high];
	int left = arr[low];
	int right = arr[high-1];
	while(true){
		
		// Duyet toi phan tu arr[left] > =privot, arr[right]<=privot
		// sau do tien hanh doi cho
		while (left<=right && arr[left]<privot) left++;
		
		while (right>=left && arr[right]>privot) right--;
		
		if(left>=right) break;  // neu duyet het mang thi dung
		
		swap(arr[left], arr[right]);   // lenh doi cho
		
		// tiep tuc duyet toi phan tu thoa man tiep theo
		left++;
		right--;
	}
	swap(arr[left], arr[high]);  // doi vi tri arr[left] va privot;
	
	return left;   // tra ve vi tri chia doi mang
}

void quicksort(int arr[], int low, int high){
	if(low<high){
		int pi = partition(arr,low, high);
		quicksort(arr,low, pi-1);
		quicksort(arr, pi+1, high);
	}
}

void printArray(int arr[], int size){
	for(int i=0;i<size;i++)
		cout<<" "<<arr[i];
}

int main(){
	int a[10]={1, 3, 5, 6, 2, 8, 9, 4, 7, 10};
	int n = sizeof(a)/sizeof(a[0]);
	quicksort(a,0,n-1);
	cout<<"Array sorted: "<<endl;
	printArray(a,n);
}
