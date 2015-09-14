Interactive quizzes in a gitbook
==============



## 修改服务端地址
需要修改服务端地址，在./book/quizzes.js的78行设置，地址改成服务端程序1.py所在机器的ip地址

## How to use it?


## Quizzes format

Quizzes need to start and finish with a separation bar (```---``` or ```***```).

    ---

    Here's a quiz about Gitbook

    |                  | Good | Bad |
    | ---------------- | ---- | --- |
    | What is Gitbook? | (x)  | ( ) |

    > Gitbook is good

    What does Gitbook support?
    - [x] Table-based questions with radio buttons
    - [x] Table-based questions with checkboxes
    - [ ] Telepathy
    - [x] List-based questions with checkboxes
    - [x] List-based questions with radio buttons
    - [ ] Moon-on-a-stick

    > Gitbook supports table and list based quiz questions using either radio buttons or checkboxes.
    >
    > Gitbook is not telepathic and does not give you the moon on a stick.

    ---

