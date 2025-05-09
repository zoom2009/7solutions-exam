Test by: <b>Sikarin Poonsawat</b>

## for testing website (Deploy on vercel)
[https://7solution-exam.vercel.app](https://7solution-exam.vercel.app)

this repo using next 15 and bun

## for development follow this steps
```bash
bun install
bun dev
```

## for production follow this steps
```bash
bun install
bun run build
bun start
```

## Note
### TODO-LIST test:
- [x] react-scan will active showing only render component (not whole page rerender when list was updated)
- [x] this project using zustand and new Map instance for array for improve performance

## Note
### DATA-API test:
- [x] using react-query for prefetch, fetch, cache data
- [x] this react-query hydration will make web page to ssr for good SEO (google will see full html content)
- [x] good performance cache data for 1 mn. , suspend fetching data and fallback loading ui
- [x] transform data using normal for loop with store in object (that mean only run (n) time not run (n^2) time)
- [x] transform data using get fn. from lodash/get (that save bundle)

### Test Coverage Result
<img width="1226" alt="image" src="https://github.com/user-attachments/assets/615d7001-5efd-46ba-8d10-848520cb7390" />
