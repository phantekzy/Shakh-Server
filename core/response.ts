import { ServerResponse } from "http";

export interface ArcResponse extends ServerResponse {
  status(code: number): this;
  json(data: any): void;
  send(data: any): void;
}

export function enhanceResponse(res: ServerResponse): ArcResponse {}
