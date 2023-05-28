# Lab 8 - Starter
Name: Linda Wu

1. Within a Github action that runs whenever code is pushed, because this is more efficient and less manual work for coders. Additionally, this ensures that a test is ran frequently enough so that whenever an error is made, it will be caught in time and can be fixed quickly. If it is ran after all development is complete, it will be difficult to find the source of the error.
2. No, since end to end tests run the whole program from start to finish. Thus, testing an individual function will require a test on a smaller scale as end to end tests will be more inefficient.
3. No, since messaging typically requires multiple components for it to be able to work. Thus, if the test fails, there can be an issue in the sending or receiving end that can cause it to fail and it would be hard to test with unit testing since it is on a smaller scale.
4. Yes, since testing a message length is a test that can be done on a smaller scale -- the tester can simply attempt to send a message over the limit and the test will allow the tester to see if it went through.