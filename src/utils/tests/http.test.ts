import axios from "axios"
import { newHttp } from "../http"

const HOSTS = ["http://h1.com/", "http://h2.com/"]
const TIMEOUT = 2000

function newPromise(time: number) {
  return new Promise(res => {
    setTimeout(() => {
      res(undefined)
    }, time)
  })
}

describe("http", () => {
  let http: ReturnType<typeof newHttp>
  beforeAll(() => {
    jest.useFakeTimers()
    http = newHttp({ hosts: HOSTS, timeout: TIMEOUT })
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  test("httpGet", done => {
    jest.spyOn(axios, "get").mockImplementation(url => {
      if (url.startsWith(HOSTS[0])) {
        newPromise(3000)
      }

      return newPromise(1000)
    })

    http.get$("cat").subscribe(() => {
      runBeforeDone(() => {
        expect(axios.get).toBeCalledWith("http://h2.com/cat")
      }, done)
    })

    jest.advanceTimersByTime(3000)
  })
})

function runBeforeDone(callback, done) {
  try {
    callback()
    done()
  } catch (err) {
    done(err)
  }
}
