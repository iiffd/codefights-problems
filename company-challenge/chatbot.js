conversations = [["tonight","i","need","dollar","bills"], 
 ["i","dont","keep","fun"], 
 ["cheap","thrills","long","to","feel","money"], 
 ["the","bills","dont","need","the","dancing","baby"], 
 ["fun","dollar","dancing","thrills","the","baby","i","need"], 
 ["dont","have","fun"], 
 ["no","no","dont","have","dancing","fun","tonight"]]
currentConversation = ["beat", 
 "the", 
 "can", 
 "as", 
 "i", 
 "dont", 
 "feel", 
 "thrills"]


function getMatches(conversation, currentSet, current) {
  let matchCount = 0;
  let lastIndex;
  let seen = new Set();

  for (let i = 0; i < conversation.length; i += 1) {
    if (currentSet.has(conversation[i])) {
      if (!seen.has(conversation[i])) {
        matchCount += 1;
        seen.add(conversation[i]);
      }
      lastIndex = i;
    }
  }

  if (matchCount > current) return [ matchCount, conversation.splice(lastIndex + 1, conversation.length - 1) ];
}

function chatBot(conversations, currentConversation) {
  let current = 0;
  let subSet = [];
  const currentSet = new Set(currentConversation);

  for (const conversation of conversations) {
    const temp = getMatches(conversation, currentSet, current);
    if(temp) {
      [current, subSet] = temp;
    }
  }

  return currentConversation.concat(subSet);
}

chatBot(conversations, currentConversation);
