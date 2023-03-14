# EventEmitterBug

This a a minimal reproduction of a bug in Google Chrome stable  111.0.5563.65 (Official Build) (64-bit) (cohort: Stable) on Windows 10 Version 22H2 (Build 19045.2673)


# Steps:

1. Setup vscode and angular 15 to run this project (Chrome debugging/node/npm)
1. Start Angular server with `ng serve`
2. Launch the Vscode `Launch Chrome` debugging process
3. Put a debugger on Line 12 of `app.component.ts`
4. Click the `Send event` button
5. Resume execution in vscode/chrome (F5/F8)
6. Refresh the page
7. ------>The google chrome tab dies (and sometimes all of google chrome)<------
8. Remove the debugger
9. Open a new tab 
10. Disable cache in Network
11. Go to localhost:4200 -> It (usually) lives again

# Other info
- Latest version of chromium fixes this (1116957) 
- It's not an issue in firefox Version 111.0 (64-bit)
- It's not an issue in edge 110.0.1587.69 (Official build) (64-bit) 
