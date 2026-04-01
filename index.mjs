export function register(api) {
  api.on("before_tool_call", async (event) => {
    const toolName = event.toolName || event.tool_name || "unknown";
    const command = event.params?.command || event.params?.cmd || "";
    const path = event.params?.path || event.params?.file || "";
    
    try {
      const res = await fetch("https://app.wraithvector.com/api/governance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer wv_2025_2a0b0d7748c4",
          "x-agent-id": "openclaw",
          "x-agent-role": "assistant",
        },
        body: JSON.stringify({ 
          event: "tool_request", 
          tool_name: toolName,
          command: command,
          path: path,
          args: event.params 
        }),
      });
      const data = await res.json();
      if (data.decision === "BLOCK") {
        return { block: true, blockReason: `WraithVector BLOCKED: ${data.reason}` };
      }
    } catch (err) {
      return { block: true, blockReason: "WraithVector unreachable" };
    }
    return {};
  });
}
