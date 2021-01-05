/* Code by duongdinh24.com
 	Github: https://github.com/duongdinh24/
*/

#include <stdio.h>
 
 
void swap(int &x, int &y)
{
    int temp = x;
    x = y;
    y = temp;
}
 
void bubbleSort(int arr[], int n){
    int i, j;
    for (i = 0; i < n-1; i++)
        for (j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]){
                swap(arr[j], arr[j+1]);
            }
}
 
void printArr(int arr[], int size){
    for (int i=0; i < size; i++)
        printf("%5d", arr[i]);
}
 
// Driver program to test above functions
int main()
{
    int arr[] = {90, 5, 3, 1, 8, 7, 2, 4, 10};
    
    int size = sizeof(arr)/sizeof(arr[0]);
    
    bubbleSort(arr, size);
    printf("\n\n");
    printf("Sorted array: ");
    printArr(arr, size);
    return 0;
}
