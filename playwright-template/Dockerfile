FROM mcr.microsoft.com/playwright:v1.44.0-jammy
RUN mkdir /app
WORKDIR /app
CMD [ "npx", "playwright", "test" ]
COPY package.json .
RUN npm install
COPY playwright.config.ts .
RUN npx playwright install
COPY . /app/

