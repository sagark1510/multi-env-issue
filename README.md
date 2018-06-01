# multi-env-issue
I was trying to implement multi environment in my project but it is not workign on ios. Staging biuld config duplicated from release build config is not archiving for some reason.

Steps to run app
----------------
1. clone or download the project
2. $cd project
3. $npm install
4. open in xcode
5. select `powido staging` scheme from top left button in xcode
6. produc->archive (make sure you have selected no device)
7. You will the error `Lexical or Preprocess issue, can not find <React/RCTBundleUrlProvider.h> not found`.
