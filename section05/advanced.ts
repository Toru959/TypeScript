type Engineer = {
    name: string,
    role: string,
}

type Blogger = {
    name: string,
    follower: number,
}

type EngineerBlogger = Engineer & Blogger;
const John: EngineerBlogger = {
    name: 'John',
    role: 'front-end',
    follower: 200
}

interface Engineer2 {
    name: string,
    role: string
}

interface Blogger2 {
    name: string,
    follower: number,
}

interface EngineerBlogger2 extends Engineer2, Blogger2 {
    name: 'Eric',
    role: 'Back-end',
    follower: 90
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;
