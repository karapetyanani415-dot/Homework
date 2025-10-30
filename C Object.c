#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <errno.h>

typedef enum {
    JS_UNDEFINED,
    JS_FLOAT64,
    JS_INT64,
    JS_BOOLEAN,
    JS_STRING
} JS_TYPE;

typedef struct {
    JS_TYPE type;
    union {
        double float64;
        long long int int64;
        bool boolean;
        char* string;
    } _val;
} JS_VALUE;

typedef struct {
    char* key;
    JS_VALUE value;
    bool used;
} JS_PROPERTY;

typedef struct {
    JS_PROPERTY* properties;
    int cap;
    int size;
} JS_OBJECT;

void* allocate_memory(size_t bytes) {
    void* result = malloc(bytes);
    if (!result) {
        perror("");
        exit(errno);
    }
    return result;
}

JS_VALUE init_undefined(void) {
    JS_VALUE value = {0};
    value.type = JS_UNDEFINED;
    return value;
}

JS_VALUE init_float64(double val) {
    JS_VALUE value = {0};
    value.type = JS_FLOAT64;
    value._val.float64 = val;
    return value;
}

JS_VALUE init_int64(long long int val) {
    JS_VALUE value = {0};
    value.type = JS_INT64;
    value._val.int64 = val;
    return value;
}

JS_VALUE init_boolean(const char* val) {
    bool result = (strcmp(val, "true") == 0);
    JS_VALUE value = {0};
    value.type = JS_BOOLEAN;
    value._val.boolean = result;
    return value;
}

JS_VALUE init_string(const char* val) {
    JS_VALUE value = {0};
    value.type = JS_STRING;
    value._val.string = strdup(val);
    return value;
}

int Prime_Number(int num){
    for(int i = num; i >= 2; --i){
        bool prime = true;
        for(int j = 2; j*j <= i; ++j){
            if(i % j == 0){
                prime = false;
                break;
            }
        }
        if(prime) return i;
    }
    return 2;
}

int charSum(const char* key){
    int sum = 0;
    while(*key) sum += *key++;
    return sum;
}

JS_OBJECT* init_OBJECT(void) {
    JS_OBJECT* ob = (JS_OBJECT*) allocate_memory(sizeof(JS_OBJECT));
    ob->cap = 8;
    ob->size = 0;
    ob->properties = (JS_PROPERTY*) allocate_memory(sizeof(JS_PROPERTY) * ob->cap);
    return ob;
}

void set(JS_OBJECT* this, const char* key, JS_TYPE type, const char* value){
    int index = charSum(key) % Prime_Number(this->cap);
    while(this->properties[index].used) {  
        index = (index + 1) % this->cap;
    }
    this->properties[index].key = strdup(key);
    this->properties[index].used = true;
    switch(type){
        case JS_UNDEFINED:
         this->properties[index].value = init_undefined(); 
        break;
        case JS_FLOAT64:   
         this->properties[index].value = init_float64(atof(value)); 
        break;
        case JS_INT64:   
         this->properties[index].value = init_int64(atoll(value)); 
        break;
        case JS_BOOLEAN:  
         this->properties[index].value = init_boolean(value);
        break;
        case JS_STRING:   
         this->properties[index].value = init_string(value); 
        break;
        default:          
         this->properties[index].value = init_undefined(); 
        break;
    }
    this->size++;
}

JS_VALUE get(JS_OBJECT* this, const char* key){
    for(int i = 0; i < this->cap; i++){
        if(this->properties[i].used && strcmp(this->properties[i].key, key) == 0){
            return this->properties[i].value;
        }
    }
    return init_undefined();
}

int main(){
    JS_OBJECT* ob = init_OBJECT();

    set(ob, "name", JS_STRING, "Ani");
    set(ob, "age", JS_INT64, "17");
    set(ob, "isStudent", JS_BOOLEAN, "true");
    JS_VALUE name = get(ob, "name");
    JS_VALUE age = get(ob, "age");
    JS_VALUE isStudent = get(ob, "isStudent");

    printf("name: %s\n", name._val.string);
    printf("age: %lld\n", age._val.int64);
    printf("isStudent: %s\n", isStudent._val.boolean ? "true" : "false");


    for(int i = 0; i < ob->cap; ++i) {
        if(ob->properties[i].used && ob->properties[i].key != NULL) {
            free(ob->properties[i].key);
            if(ob->properties[i].value.type == JS_STRING) {
                free(ob->properties[i].value._val.string);
            }
        }
    }
    free(ob->properties);
    free(ob);
    return 0;
}
