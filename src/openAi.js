import OpenAI from 'openai';
import { openAiApiKey } from './constants/ApiData';

const openai = new OpenAI({
  apiKey:openAiApiKey, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});
export default openai