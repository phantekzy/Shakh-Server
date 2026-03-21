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
  arcRes.json = (data: any) => {
    arcRes.setHeader("Content-Type", "application/json");
    arcRes.end(JSON.stringify(data));
  };
  arcRes.send = (data: string) => {
    arcRes.setHeader("Content-Type", "text/plain");
    arcRes.end(data);
  };
  return arcRes;
}
