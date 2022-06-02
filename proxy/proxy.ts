namespace ProxyPattern {
    interface ITeacher {
        teach(): void
    }

    class Teacher implements ITeacher {
        public teach() {
            console.log('teaching')
        }
    }

    class TeacherProxy implements ITeacher {
        public constructor(private teacher: ITeacher) {}

        public teach() {
            this.teacher.teach()
        }
    }

    class Client {
        public main() {
            const teacherProxy = new TeacherProxy(new Teacher())
            teacherProxy.teach()
        }
    }
}