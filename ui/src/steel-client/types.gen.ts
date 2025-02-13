// This file is auto-generated by @hey-api/openapi-ts

export type ScrapeRequest = {
  url: string;
  format?: Array<"html" | "readability" | "cleaned_html" | "markdown">;
  screenshot?: boolean;
  pdf?: boolean;
  proxyUrl?: string;
  delay?: number;
  logUrl?: string;
};

export type ScrapeResponse = {
  content: {
    [key: string]: unknown;
  };
  metadata: {
    title?: string;
    ogImage?: string;
    ogTitle?: string;
    urlSource?: string;
    description?: string;
    ogDescription?: string;
    statusCode: number;
    language?: string;
    timestamp?: Date;
    published_timestamp?: Date;
  };
  links: Array<{
    url: string;
    text: string;
  }>;
  screenshot?: string;
  pdf?: string;
};

export type ScreenshotRequest = {
  url: string;
  proxyUrl?: string;
  delay?: number;
  fullPage?: boolean;
  logUrl?: string;
};

export type ScreenshotResponse = unknown;

export type PDFRequest = {
  url: string;
  proxyUrl?: string;
  delay?: number;
  logUrl?: string;
};

export type PDFResponse = unknown;

export type CreateSession = {
  /**
   * Unique identifier for the session
   */
  sessionId: string;
  /**
   * Proxy URL to use for the session
   */
  proxyUrl?: string;
  /**
   * User agent string to use for the session
   */
  userAgent?: string;
  /**
   * Session context to use for the session
   */
  sessionContext?: {
    [key: string]: unknown;
  };
  /**
   * Indicates if Selenium is used in the session
   */
  isSelenium?: boolean;
  /**
   * Log sink URL to use for the session
   */
  logSinkUrl?: string;
  /**
   * Extensions to use for the session
   */
  extensions?: Array<string>;
  /**
   * Timezone to use for the session
   */
  timezone?: string;
  /**
   * Dimensions to use for the session
   */
  dimensions?: {
    width: number;
    height: number;
  };
};

export type SessionDetails = {
  /**
   * Unique identifier for the session
   */
  id: string;
  /**
   * Timestamp when the session started
   */
  createdAt: Date;
  /**
   * Status of the session
   */
  status: "live" | "released" | "failed";
  /**
   * Duration of the session in milliseconds
   */
  duration: number;
  /**
   * Number of events processed in the session
   */
  eventCount: number;
  /**
   * Session timeout duration in milliseconds
   */
  timeout: number;
  /**
   * Amount of credits consumed by the session
   */
  creditsUsed: number;
  /**
   * URL for the session's WebSocket connection
   */
  websocketUrl: string;
  /**
   * URL for debugging the session
   */
  debugUrl: string;
  /**
   * URL to view session details
   */
  sessionViewerUrl: string;
  /**
   * User agent string used in the session
   */
  userAgent?: string;
  /**
   * Proxy server used for the session
   */
  proxy?: string;
  /**
   * Indicates if captcha solving is enabled
   */
  solveCaptcha?: boolean;
  /**
   * Indicates if Selenium is used in the session
   */
  isSelenium?: boolean;
};

/**
 * Status of the session
 */
export type status = "live" | "released" | "failed";

/**
 * Status of the session
 */
export const status = {
  LIVE: "live",
  RELEASED: "released",
  FAILED: "failed",
} as const;

export type LaunchRequest = {
  options: {
    args?: Array<string>;
    chromiumSandbox?: boolean;
    devtools?: boolean;
    downloadsPath?: string;
    headless?: boolean;
    ignoreDefaultArgs?: boolean | Array<string>;
    proxyUrl?: string;
    timeout?: number;
    tracesDir?: string;
  };
  req?: unknown;
  stealth?: boolean;
  cookies?: unknown[];
  userAgent?: string;
  extensions?: Array<string>;
  logSinkUrl?: string;
  customHeaders?: {
    [key: string]: string;
  };
  timezone?: string;
  dimensions?: {
    width: number;
    height: number;
  } | null;
};

export type LaunchResponse = {
  success: boolean;
};

export type ScrapeData = {
  body?: ScrapeRequest;
};

export type ScrapeResponse2 = ScrapeResponse;

export type ScrapeError = unknown;

export type ScreenshotData = {
  body?: ScreenshotRequest;
};

export type ScreenshotResponse2 = ScreenshotResponse;

export type ScreenshotError = unknown;

export type PdfData = {
  body?: PDFRequest;
};

export type PdfResponse = PDFResponse;

export type PdfError = unknown;

export type HealthResponse = unknown;

export type HealthError = unknown;

export type LaunchBrowserSessionData = {
  body?: CreateSession;
};

export type LaunchBrowserSessionResponse = SessionDetails;

export type LaunchBrowserSessionError = unknown;

export type GetSessionsResponse = SessionDetails;

export type GetSessionsError = unknown;

export type GetSessionDetailsData = {
  path: {
    sessionId: string;
  };
};

export type GetSessionDetailsResponse = SessionDetails;

export type GetSessionDetailsError = unknown;

export type GetBrowserContextData = {
  path: {
    sessionId: string;
  };
};

export type GetBrowserContextResponse = unknown;

export type GetBrowserContextError = unknown;

export type ReleaseBrowserSessionData = {
  path: {
    sessionId: string;
  };
};

export type ReleaseBrowserSessionResponse = unknown;

export type ReleaseBrowserSessionError = unknown;

export type ReleaseBrowserSessionsResponse = unknown;

export type ReleaseBrowserSessionsError = unknown;

export type GetDevtoolsUrlResponse = unknown;

export type GetDevtoolsUrlError = unknown;

export type ScrapeResponseTransformer = (data: any) => Promise<ScrapeResponse>;

export type ScrapeResponseModelResponseTransformer = (
  data: any
) => ScrapeResponse;

export const ScrapeResponseModelResponseTransformer: ScrapeResponseModelResponseTransformer =
  (data) => {
    if (data?.metadata?.timestamp) {
      data.metadata.timestamp = new Date(data.metadata.timestamp);
    }
    if (data?.metadata?.published_timestamp) {
      data.metadata.published_timestamp = new Date(
        data.metadata.published_timestamp
      );
    }
    return data;
  };

export const ScrapeResponseTransformer: ScrapeResponseTransformer = async (
  data
) => {
  ScrapeResponseModelResponseTransformer(data);
  return data;
};

export type LaunchBrowserSessionResponseTransformer = (
  data: any
) => Promise<LaunchBrowserSessionResponse>;

export type SessionDetailsModelResponseTransformer = (
  data: any
) => SessionDetails;

export const SessionDetailsModelResponseTransformer: SessionDetailsModelResponseTransformer =
  (data) => {
    if (data?.createdAt) {
      data.createdAt = new Date(data.createdAt);
    }
    return data;
  };

export const LaunchBrowserSessionResponseTransformer: LaunchBrowserSessionResponseTransformer =
  async (data) => {
    SessionDetailsModelResponseTransformer(data);
    return data;
  };

export type GetSessionsResponseTransformer = (
  data: any
) => Promise<GetSessionsResponse>;

export const GetSessionsResponseTransformer: GetSessionsResponseTransformer =
  async (data) => {
    SessionDetailsModelResponseTransformer(data);
    return data;
  };

export type GetSessionDetailsResponseTransformer = (
  data: any
) => Promise<GetSessionDetailsResponse>;

export const GetSessionDetailsResponseTransformer: GetSessionDetailsResponseTransformer =
  async (data) => {
    SessionDetailsModelResponseTransformer(data);
    return data;
  };
