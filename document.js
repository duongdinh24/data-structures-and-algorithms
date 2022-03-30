

// --- BIẾN ----
var x // không có scope, có thể khai báo lại và truy cập bởi đối tượng window
let y // Có scope, hoisting ở vùng dead zone, cần phải khai báo trc khi sử dụng, k đc khai báo lại
const z = 1 /*   Có scope, k gán lại được, có thể thêm phần tử mảng, thay đổi giá trị, phải khai báo trước khi sd, k đc khai báo lại
  Gán lại giá trị cũng k hợp lệ,  hoisting ở vùng dead zone,


/** ------- Các toán từ Falsy -----
   0
   null
   NaN
   undefined
   ""
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// đối tượng arguments
 function myF (){
     for(var param of arguments) {
         console.log(param);
     }
 }
/* Các loại function
     - Declaration  : function thường, có hoisting
     - Expression  : gán vào biến
     - arrow function: ()=>{}
     */

     var fullName = 'Dinh Duong';

/*  -------- STRING ---------
    fullName.length    : độ dài chuỗi
    template string: ` Toi la ${fullName}`;

    indexOf('D', 1)  : tìm vị tí D từ index 1, k tìm thấy trả về -1
    lastIndexOf('D') : tìm D từ cuối cùng
    search('D')   : Tìm vị trí đầu tiên, có thể dùng REGEX
    slide(1, 3)   : Cắt từ vị trí 1 tới 3
    replace('D', 'A')  : Ghi đè kí tự D đầu tiên
    trim()  : Loại bỏ khoảng trắng thừa
    split(" "):  Tách chuỗi bằng dấu " "   : fact split('');

*/

/*  -------- ARRAY ---------
    var myArr = new Array(1,3,4,5);
    var myARR = [1, 2, 3, 4];
    Array.isArray(myArr)    : Kiểm tra ARR
    myArr.length        : lấy độ dài mảng

    Method:
        toString
        join(', ')      : Tạo thành string với dấu ', ' ở giữa các phần tử
        pop             : Xóa phần tử ở cuối và trả lại phần tử đó
        push            : Thêm phần tử vào cuối mảng và trả lại độ dài mới của mảng
        shift           : Xóa phần tử ở đầu mảng, trả về phần tử đó
        unshift         : Thêm phần tử vào đầu mảng return new array length
        delete myArr[index]   : Biến phần tử ở vị trí index thành undefined
        splice          : arr.splice(1, 2)      : Xóa 2 phần tử từ vị trí 1
                        arr.splice(1, 1, 'A')   : Xóa 1 phần tử ở vị trí 1 và thêm A vào vị trí đó
        var finalArr = myArr.concat(myARR)          : Ghép 2 mảng
        slice(1,3)          : cắt mảng từ vị trí 1 tới vị trí < 3 và trả về arr mới. k ảnh hưởng ar gốc

        sort()         : sort array alphabetically  Sort String
        reverse()      : reverse array

                --- sắp xếp tăng ---
        const points = [40, 100, 1, 5, 25, 10];
        points.sort(function(a, b){return a - b});  
                --- sắp xếp giảm ---
        const points = [40, 100, 1, 5, 25, 10];
        points.sort(function(a, b){return b - a}); 
        
        includes('string');      : Tìm string trong mảng, chuỗi

        ----ARRAY ITERATION----
        sum 
        arr.forEach(myFunction);
        myFunction(value, index, arr){
            
        }
         Các hầm đều cần callback với 3 giá trị: value, index, arr, riêng reduce có thêm giá trị khởi tạo
            forEarch
            map
            filter
            reduce
            every    : trả về boolean
            some     : trả về boolean
            find     : return phần tử nào hợp lệ   arr.find(function(value, index) {   // chỉ trả về 1 phần tử
                                                        return value === 2;
                                                    });

            // Hàm tính tổng các phần tử trong mảng với reduce
           arr.reduce(function(result, value, index, arrOrigin) {
                return result + value;
           }, initValue)        : Khi không có initValue thì sẽ lấy phần tử đầu tiên của mảng.

           arr.reduce((a,b) => a + b, 0); 
 */


/**        ----------- OBJECT-----------
 *   var myObj = {
        a: 'dvd',
        b: 'dang thic huyn',
    }
 
    var myKey = 'a'
    myObj.a   =  myObj[myKey]   =    myObj['a'];        : lấy ra phần tử key 'a']

    object contructor:
    function User(firstName, lastName, avartar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avartar = avartar;
    }

    var author = new User('Dinh', 'Duong Van', 'Gavin');

    User.prototype.className = 'f8';   // Từ đây khi tạo đối tượng với User sẽ có thêm thuộc tính className = f8


    var date = new Date();

    Math Object:
        - Math.PI
        - Math.round();
        - Math.abs();
        - Math.ceil();   // Làm tròn trên
        - Math.floor():  // Làm tròn dưới
        - Math.random();  // Random số thập phân nhỏ hơn 1
         var random = Math.floor(Math.random() * 100)
        - Math.min()        : Trả về số nhỏ nhất trong dãy    EX: Math.min(-1, 2 4, 5, 3)
        - Math.max()        : Trả về số lớn nhất trong dãy

        ternary operator:   a=b?c:d

        object trùng tên nhau thì sẽ lấy cái khai báo sau.
*/
/* --------- VÒNG LẶP ----------------------
        for  : lặp giống bình thường

        for in : Lặp qua key của đối tượng      ex: for(var key in myObj){}

        for of : Lặp qua value của đối tượng   : không thể dùng trực tiếp với object
                Object.keys(myInfo)     : mảng key của object
                for(var value of Object.keys(myInfo)){
                    console.log(myInfo[value]);
                }
                
                for(var value of Object.values(myInfo)){
                    console.log(value);
                }

        while : lặp khi điều kiện đúng

        do/while : lặp ít nhất một lần, sau đó lặp khi điều kiện đúng

*/


   // My reduce
Array.prototype.reduce2 = function(callback, result) {
    let i = 0;
    if(arguments.length < 2){
        result = this[0];
        i = 1;
    }
    for(; i < this.length; i++){
        result = callback(result, this[i], i, this);
    }
    return result;
}

Array.prototype.myMap = function(callback){
    let result = [];
    for(let i in this ){
        if(this.hasOwnProperty(i)){     // Check xem this có index i hay không, 
                                        //(myMap sẽ ở prototype của Array và lặp for in sẽ duyệt qua nó nên cần phải check để bỏ qua)
            result.push(callback(this[i], i, this));
        }
    }
    return result;
}



/* ------------ HTML DOM ------------------------
    Các thành phần của DOM:  Element node, text node, attribute node.
    Có thể lấy ra element sử dụng:  id, class, tag, css selector, html colection

    Hàm: getElementById(): 
         getElementsByClassName()   : trả về Htmlcolection, có thể dùng vòng lặp for, while để duyệt
         getElementsByTagName()     : trả về htmlcolection
         querySelector()            : trả về 1 element
         querySelectorAll()         : trả về nodelist element

         document.forms['form-1']       : khi select form có thể dùng cách này
         document.forms.loginForm       : lấy ra form có id là loginForm

         boxNode.querySelector('p')     : Đứng từ boxNode dùng hàm querySelector

         element.className = 'dvdinh';    // Thêm attribute vào element, chỉ có element nào có attribute tương ứng mới thêm được
         element.href = 'http://duongdinh24.com'            // Có thể dùng cách này để lấy ra thuộc tính tương ứng
         element.setAttribute('class', 'myclass')       : Thêm class myclass vào element , có thể setasstribute tùy biến.
         element.getAttribute('myattribute')        : lấy ra myattribute

         innerText          : Lấy ra những gì có thể thấy ở trình duyệt, xuống dòng sẽ tự quy đồi thành thẻ br
                element.innerText = 'abc'      : setter
                conslole.log(element.innerText)        :getter

         textContent        : Lấy ra những gì textNode có ở trong soure, có cả lấy khoảng cách, không bị ảnh hưởng bởi css
                            : textContent có thể in ra cả những gì trong thẻ script
                            &lt  <>   &gt </>
        innerHtml           : Thêm element node, có thể nhận diện các thẻ html

        outerHtml           : Thay thế toàn bộ element bằng element được outerHtml

        ------- Node property -----------
        var boxElement = document.querySelector("#box-element");
        console.log([boxElement]);          log ra tất cả thuộc tính của boxElement

        DOM style
        Object.assign(boxElement.style, {
            width: '200px',
            height: '300px',
            backgroundColor: '#FFFFFF',
        });

        console.log(boxElement.classList.value);
        classList có các phương thức: 
                    add         : thêm  boxElement.classList.add('red','blue');
                    contains    : chứa
                    remove      : xóa
                    toggle      : có thì thêm, k có thì xóa


        ------DOM EVENT------------ search khác ra
        boxElement.onclick = function(e){
            e.preventDefault();         // ngăn hành vi mặc định
            e.stopPropagation();        // Ngăn hành vi nổi bọt
            console.log(e.target);
        }
        onkeypress, input . . . rất nhiều loại. conslole.log()
        boxElement.onkeyup = function(e){
            switch(e.which){
                case 27:
                    break;
                case 30:
                    console.log(e.which);
            }

        }
        . . . .

        preventDefault      : loại bỏ hành vi mặc định
        stopPropagation     : Ngăn nổi bọt

        var allLink = document.anchors  // lấy ra thẻ a dựa vào attribute name của thẻ a đó
            allLink = document.links    // lấy ra các link

    
      ------- EVENT listener
       boxElement.addEventListener('click', function(){
            console.log(Math.random());
       });
*/


/* REGEX 
            reference at https://www.w3schools.com/js/js_regexp.asp
            complete reference at https://www.w3schools.com/jsref/jsref_obj_regexp.asp
   /pattern/modifiers

   Ex: let text = "re, green, red, green, gren, gr, blue, yellow";
        let result = text.match(/(red|green)/g);        : green,red,green

   3 type modifiers: /i    : insensitive chữ hoa và chữ thường
                     /g     : global search
                     /m     : perform mutiline matching
    Pattern:
        [a,b,c]         : tìm có a , b hoặc c.
        [0-9]           : tìm từ 0 đến 9
        (a|b)           : tìm bất cứ a hoặc b
        \d              : tìm digit
        \s              : tìm space
        \b            : begin with  ex: \bWORD      : từ bắt đầu bởi WORD
                                        WORD\b      : end bởi WORD
        \uxxxx          : Tìm kí tự được chỉ định bởi mã unicode hệ thập lục phân xxxx

        n+              : match string at least one character n
        no*             : match any string có 1 n và o có thể xuất hiện từ 0 lần trở lên
                        ví dụ: noonnnooo      noo,n,n,nooo
        no?             : match any string that contains one n and zero or one occurrences of o
                            ( 1 n và 0 hoặc 1 o)

                        REGEX function
         test()         : check xem có chứa REGEX không

        const pattern = /e/
        pattern.test('hello Viet Nam') ;  || return true;  



*/


/*       ----------- JSON ----------- 
       1: Là một dạng định dạng dữ liệu mẫu
       2: JavaScript Object Notation
       3: JSON: Number, Object, String, Null, Array

       Mã hóa / Giải mã   || Stringify / Parse

       json server https://github.com/typicode/json-server

*/

/*  ------------ PROMISE ----------------

       var promise = new Promise(
           function(resolve, reject){
                // logic
                resolve([     // Lọt vào .then(){}
                    {
                        id: 1,
                        name: 'JavaScript'
                    }    
                ]);     
                //reject();      // Lọt vào .catch(){}
           }
       )

       promise
           .then(function(courses){
               console.log(course);
               // Nếu chỗ này k return promise thì sẽ chạy ngay then thứ 2.

               return Promise(function(resolve){
                   setTimeout(resolve, 1000);
               });
           })
           // chờ promise bên trên thực hiện xong mới tới then
           .then(function(data){
               console.log(data);
           })
           .catch(function(){
               
           })
           .finally(function(){
               
           });


           promise: 3 trạng thái: pendding, fulfilled, reject
           + sinh ra để xử lý bất đồng bộ, trước khi có promise thì dùng callback, dễ bị callback held, khó nhìn
           + để tạo ra promise: new Promise(function(resolve, reject))
                : truyền vào excutor function với 2 callBack function là:  resolve, reject. gọi resolve khi không có lỗi, reject có lỗi.
           + khi thực thi, có lỗi sẽ lọt vào catch, 

    
*/


/* ----------JAVASCRIPT ES6  -- ECMASCRIP 2015 ------------- 
        Babel - biến code es6 thành es5

        Đặc trưng của ES6:

        1. let, const
        2. Template literals  (template string truyền biến)
        3. Multi line string  (template string có thể xuống dòng)
        4. Arrow function
        5. Classes
        6. Default parameter values
        7. Destructuring
        8. Rest parameter
        9. Spread
        10. Enhanced Object literals
        11. Tagged template literal
        12. Module


           ---------arrow function-------
            const sum = (a,b) => ({a: a, b: b})      // return object
            const sum = (a,b) => a + b;
                    arrow function không thể làm contructor function

          ----- CLASS ---
        class Course{
            constructor(name, price){
                this.name = name;
                this.price = price;
            }
            getPrice(){
                retrun this.price;
            }
        }

        function Course(name, price){
            this.name = name;
            this.price = price;
        }

        -----default prarameter value -----
        function printName (name = 'DVD'){

        }

        function myLogger(log, type = 'log'){
            console[type](log);
        }
         myLogger('Hiện log');
         myLogger('Hiện warm', 'warm');


         ---- enhanced object literals---------
         var name = 'js';
         var price = 100;
         var otherKey = 'time';
         var course = {
             name,
             price,
             [otherKey]: 42,
             getName(){         // có thể bỏ chữ function
                 return name;
             }
         };

         ------ Destructuring --------------
         var array = ["JS", "PHP", "Ruby"];
         var [a, b, c] = array;         // a = JS . . .
         var [a, , c] = array;      // không lấy PHP

         **** rest  là toán tử ....  khi sử dụng với destruturing.   hoặc tham số trong hàm khi định nghĩa
         var [a, ....rest] = array;     // rest = ["PHP", "Ruby"];

         var course = {
             name: 'JavaScript',
             price: 1000,
             child: {
                 name: 'ReacJS',
             }
         }

         var {name: parentName, price, child: {name: childName}} = course;

         var post = {
             title: 'Hoc react',
             detail: 'Tat ca ve react'
         }

         var {title, description = 'Default description'} = course;

         function logger(...params) {       // Toán tử rest nhận nhiều param, params sẽ là 1 mảng

         }

         function logger2(a, b, ...params) {        // a, b lần lượt là 2 params đầu

         }

         function logger([a, b, ...rest]){
             //  your logic
         }
         logger([1,2,3]); 

         ---------- spread ---------------- Toán tử rải

         1: hợp nhất mảng
         var array1 = ['PHP', 'JAVASCRIPT', 'PYTHON']
         var array2 = ['RUBY', 'DART']
         
         var arr3 = [...array1, ...array2];

         2: hợp nhất object
          var defaultCongfig = {
                api = 'http://localhost',
                type = 'application'
          }

          var myConfig = {
              ...defaultCongfig,
              api = 'http://localhost/123'  // cái này sẽ ghi đè
          }

          3: Dùng khi gọi Hàm
          var laguages = ['PHP', 'JS', 'PYTHON']

          function logg(a, b, c){
              console.log(a, b, c);
          }

          logg(...laguages); /// nó sẽ bỏ dấu [] của mảng


           ---------Tagged template literal --------------

           fucntion highlight([first, ...strings], ...values){  
               return valuses.reduce((arr, curr) => [...arr, `<span>${curr}</span>, strings.shift()], [first])
           }
            
           khi truyền vào hàm 1 template string, nó sẽ nhận đc 2 mảng. 1 mảng gồm text, 1 mảng gồm values;


           var laguage = 'JavaScript';
           var brand = 'F8';

           const html = highlight `Học lập trình ${laguage} tại ${brand}!`

           console.log(html);


           ------------- Module ---------------
           export default logger;    // Một module chỉ export default được 1 cái
           import logger from './logger.js'         // Nếu export default

           export {a, b c};


           ------------Optional chaining (?.)---------- check xem 1 obj có key đó không
            khi nghi ngờ 1 key không tồn tại, thì thêm ?.
           var obj = {
               cat1: {
                   cat2:{
                       cat3: {

                       }
                   }
               }
           };
           
           if(obj.cat1?.cat2?.cat3)   // Check xem có key 2, key 3 không
*/


/* JAVASCRIPT NÂNG CAO
          Closure:


          function createCounter(){
              let counter = 0;
              function increase(){
                  return ++counter;
              }
              return increase;
          } 

          const counter1 = createCounter();   // Tạo một vùng, môi trường cho hàm createCouter thực thi. 
          console.log(counter1);   //1      
          console.log(counter1);   //2      // Vẫn cùng một môi trường thực thi nên nó nhớ giá trị của counter.
          console.log(counter1);   //3


          function createLogger(namespace){
              function logger(message){
                  console.log(`[${namespace}] ${message}`);
              }
              return logger;
          }

          const infoLogger = createLogger('Info');
          infoLogger('Log 1');
          infoLogger('Log 2');

          -----------------
*/
        // Ứng dụng closure
        function createStorage(key) {
            const store = JSON.parse(localStorage.getItem(key)) ?? {};
            const save = () => {
                localStorage.setItem(key, JSON.stringify(store))
            }

            const storage = {
                get(key){
                    return store[key];
                },

                set(key, value) {
                    store[key] = value;
                    save();
                }, 
                remove(key){
                    delete store[key];
                    save();
                }
            }
            return storage;
        }

        const pofileSetting = createStorage('profile_setting');
        profileSetting.set('fullName', 'DVD');
        profileSetting.set('age', 20);


/*      IIFE  - Immediately Invoked Function Expression
        
        (function() {

        })()

        const app = function() {
            const cars = [];
            return {
                add(car){
                    cars.push(car);
                },
                edit(index, car){
                    cars[index] = car;
                },
                delete(index){
                    cars.splice(index,1);
                }

            }
        }



        -------- THIS KEY WORD --------------
        this trỏ về đối tượng mà nó đang thuộc về
        Đặc tính:  + Trong một phương thức, this trỏ về đối tượng truy cập phương thức (trước dấu .)
                    + Đứng ngoài phương thức, this trỏ về đối tượng Global
        Lưu ý: 
            + this trong hàm tạo là đại diện cho đối tượng được tạo
            + this trong một hàm là undefined khi ở strict mode
            + Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác
            + arrow function trỏ this tới this bên ngoài của function


            ------bind()------
            this.firstName =  'Dinh';
            this.lastName = 'Duong';

            const student = {
                firstName: 'Huyen',
                lastName: 'Duong',
                getFullName(){
                    return this.firstName + ' ' + this.lastName;
                }
            }
            
            console.log(student.getFullName());     //  Huyen Duong

            const getStudentName = student.getFullName    // this của cái này trả về window
            getStudentName();    // Dinh DUong

            const getStudentNameBind = student.getSudentName.bind(student);    // bind cái nào this trỏ về cái đó
            getStudentNameBind();   // Huyen Duong

            bind(obj, par1, par2)       // obj sẽ là đối tượng bind tới. par1, par2 là tham số của đối tượng (nếu có)


            const deleteBtn = e.target.closest('.delete');    // chọn đối tượng Dom có class là: delete

            ------------Fn.call method---------- Mượn hàm
        


            const teacher = {
                fristName: 'Huyen',
                lastName: 'Duong'
            }

            const me = {
                firstName: 'Dinh',
                lastName: 'Duong',
                showFullName(){
                    console.log(`${this.firstName} ${this.lastName}`);
                }
            }

            me.showFullName.call(teacher);  /// Huyen Duong

                ------------- this trong strict mode
                vì được binde nên this vẫn được hiểu là đối tượng windows
       
            'use strict'
            this.fristName = 'Dinh'
            this.lastName = 'Duong'
            function showFullName(){
                 console.log(`${this.firstName} ${this.lastName}`);
            }
            showFullName.call(this)         // Dinh Duong   


            ------ Tính kế thừa ----------
            function Animal(name, weight){
                this.name = name;
                this.weight = name; 
            }

            function Chicken(name, weight, legs) {
                Animal.call(this, name, weight);
                this.legs = legs;
            }

            ---------- apply()--------

            const teacher = {
                fistName: 'Minh',
                lastName: 'Thu'
            }
            function greet(greeting, message){
                return `${greeting} ${this.fistName} ${this.lastName} ${message}`;
            }

            let result = greet.apply(teacher, ['Em chào cô', 'Cô dạy môn gì thế ạ']);  
            // Khác biệt khi truyển các đối số sau trong [];

                    ---------------So sánh ---------
            3 function đều được kế thừa từ lớp Function.prototype.name   // name ở d dây là bind, call, apply.

            ------------------------
            bind()      ||   bind(teacher, name, age)
                    +    Trả ra hàm mới, thực hiện bind `this` với `thisArg`    
                    +    Không thực hiện gọi hàm
                    +    Nếu được bind kèm vởi các tham số thứ 2 (arg2, arg3) thì các arg này sẽ được ưu tiên hơn.
            ------------------------
            call()      ||  call(teacher, name, age)
                    +   Thực hiện bind this với thisArg và thực hiện gọi hàm 
                    +   Nhận đối số cho hàm gốc từ tham số thứ 2
            ------------------------
            apply()     || apply(teacher, [name, age])
                    +   Thực hiện bind this với thisArg và thực hiện gọi hàm 
                    +   Nhận các đối số cho hàm gốc từ tham số thứ 2 dưới dạng mảng

*/

