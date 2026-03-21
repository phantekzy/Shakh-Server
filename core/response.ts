import { ServerResponse } from "http";

export interface ArcResponse extends ServerResponse {
  status(code: number): this;
  json(data: any): void;
  send(data: string): void;
}

export function enhanceResponse(res: ServerResponse): ArcResponse {
  const arcRes = res as ArcResponse;
  arcRes.status = (code: number) => {
    arcRes.statusCode = code;
    return arcRes;
  };

  return arcRes;
}
