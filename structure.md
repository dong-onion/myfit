.
├── README.md
├── api
│   ├── benchmark.ts
│   ├── blueprint.ts
│   ├── bm-canvas.ts
│   ├── customer-journey-map.ts
│   ├── overall.ts
│   ├── persona.ts
│   ├── swot.ts
│   └── system-map.ts
├── craco.config.cjs
├── package.json
├── public
│   ├── favicon.ico
│   ├── images
│   │   └── main.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── screenshots
│   ├── complete_test.png
│   ├── input_service.png
│   ├── main.png
│   ├── service_design_tool.png
│   ├── test.png
│   └── thumbnail.png
├── src
│   ├── @types
│   │   ├── global
│   │   │   └── index.d.ts
│   │   └── styled.d.ts
│   ├── App.tsx
│   ├── assets
│   ├── clovaAI
│   │   └── api.ts
│   ├── components
│   │   ├── Button
│   │   │   ├── Button.style.ts
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── ClovaLogo
│   │   │   ├── ClovaLogo.tsx
│   │   │   └── index.ts
│   │   ├── HeaderLayout
│   │   │   ├── HeaderLayout.style.ts
│   │   │   ├── HeaderLayout.tsx
│   │   │   └── index.ts
│   │   ├── HoldOn
│   │   │   ├── HoldOn.style.ts
│   │   │   ├── HoldOn.tsx
│   │   │   └── index.ts
│   │   ├── Modal
│   │   │   ├── Modal.style.ts
│   │   │   ├── Modal.tsx
│   │   │   └── index.ts
│   │   ├── Retry
│   │   │   ├── Retry.style.ts
│   │   │   ├── Retry.tsx
│   │   │   └── index.ts
│   │   ├── ScrollToTop
│   │   │   ├── ScrollToTop.tsx
│   │   │   └── index.ts
│   │   ├── Skeleton
│   │   │   ├── Skeleton.style.ts
│   │   │   ├── Skeleton.tsx
│   │   │   └── index.ts
│   │   ├── SkeletonWrapper
│   │   │   ├── SkeletonWrapper.style.ts
│   │   │   ├── SkeletonWrapper.tsx
│   │   │   └── index.ts
│   │   ├── Spinner
│   │   │   ├── Spinner.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── hooks
│   │   ├── useAccessControl.ts
│   │   ├── useBenchmark.ts
│   │   ├── useBlueprint.ts
│   │   ├── useBusineesModelCanvas.ts
│   │   ├── useCustomerJourneyMap.ts
│   │   ├── useOverallAnalysis.ts
│   │   ├── usePersona.ts
│   │   ├── usePreloadImage.ts
│   │   ├── useSwotAnalysis.ts
│   │   └── useSystemMap.ts
│   ├── index.tsx
│   ├── pages
│   │   ├── ErrorPage
│   │   │   ├── ErrorPage.style.ts
│   │   │   └── index.tsx
│   │   ├── FirstResult
│   │   │   ├── FirstResult.style.ts
│   │   │   ├── components
│   │   │   │   └── Loading.tsx
│   │   │   └── index.tsx
│   │   ├── Home
│   │   │   ├── Home.style.ts
│   │   │   └── index.tsx
│   │   ├── Main
│   │   │   ├── Main.style.ts
│   │   │   └── index.tsx
│   │   ├── MobilePage
│   │   │   └── MobilePage.tsx
│   │   ├── NotFound.tsx
│   │   │   └── index.tsx
│   │   ├── SecondResult
│   │   │   ├── SecondResult.style.ts
│   │   │   ├── components
│   │   │   │   ├── BarChart.tsx
│   │   │   │   └── Loading.tsx
│   │   │   └── index.tsx
│   │   ├── ServiceRegistration
│   │   │   ├── ServiceRegistration.style.ts
│   │   │   └── index.tsx
│   │   ├── ServiceTools
│   │   │   ├── Benchmarking
│   │   │   │   ├── Benchmarking.style.ts
│   │   │   │   ├── components
│   │   │   │   │   └── Loading.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── Blueprint
│   │   │   │   ├── Blueprint.style.ts
│   │   │   │   ├── components
│   │   │   │   │   └── Loading.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── BusineesModelCanvas
│   │   │   │   ├── BusineesModelCanvas.style.ts
│   │   │   │   ├── components
│   │   │   │   │   └── Loading.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── CustomerJouneyMap
│   │   │   │   ├── components
│   │   │   │   │   └── Loading.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── Persona
│   │   │   │   ├── components
│   │   │   │   │   └── Loading.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── Swot
│   │   │   │   ├── components
│   │   │   │   │   └── Loading.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── SystemMap
│   │   │   │   ├── components
│   │   │   │   │   └── Loading.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── components
│   │   │   │   ├── ContentBox
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── ContentHeader
│   │   │   │   │   └── indext.tsx
│   │   │   │   ├── Frame
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── TypeInfoLoading
│   │   │   │   │   └── index.tsx
│   │   │   │   └── TypeInfoSection
│   │   │   │   └── index.tsx
│   │   │   └── index.ts
│   │   ├── Test
│   │   │   ├── components
│   │   │   │   ├── ProgressBar.tsx
│   │   │   │   └── RatingCheckbox.tsx
│   │   │   └── index.tsx
│   │   ├── TestStart
│   │   │   └── index.tsx
│   │   └── index.ts
│   ├── routes.tsx
│   ├── styles
│   │   ├── GlobalStyle.tsx
│   │   ├── pageStyles
│   │   │   └── home.style.ts
│   │   └── theme.ts
│   └── utility
│   ├── constants.ts
│   └── utils.ts
├── tsconfig.json
├── tsconfig.paths.json
└── vercel.json
