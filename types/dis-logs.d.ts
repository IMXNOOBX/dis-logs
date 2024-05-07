declare module 'dis-logs' {
	class Webhook {
	  constructor(
		webhook_url?: string, 
		name?: string, 
		avatar?: string, 
		console?: boolean, 
		discord?: boolean
	);
  
	  set_name(name?: string): Promise<void>;
	  set_avatar(base64Avatar?: string | null): Promise<void>;
	  delete(): Promise<void>;
	  get_time(): string;
	  console(content: string): Promise<void>;
	  success(content: string): Promise<void>;
	  warn(content: string): Promise<void>;
	  error(content: string): Promise<void>;
	  send(content: string): Promise<void>;
	}
  
	export { Webhook };
  }
  